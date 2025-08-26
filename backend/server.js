import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contact.js';
import usersRouter from "./routes/users.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use("/api/users", usersRouter);

// app.get('/', (req, res) => {
//   res.send("Backend is running...");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
