const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const Review = require('../models/Review');

const router = express.Router();

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'fitness-reviews',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});
const upload = multer({ storage });

// Create Review
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { username, rating, comment } = req.body;
        const image = req.file ? req.file.path : null;

        const review = new Review({ username, rating, comment, image });
        await review.save();
        res.status(201).json({ message: 'Review added successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving review', error });
    }
});

// Get Reviews
router.get('/', async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

// Delete Review
router.delete('/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });

        // Delete image from Cloudinary
        if (review.image) {
            const publicId = review.image.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        }

        await review.deleteOne();
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
});

module.exports = router;
