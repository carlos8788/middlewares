import dotenv from "dotenv";

dotenv.config()

export default {
    URI_DB: process.env.URI_DB || 'http://localhost:3006',
    PORT: process.env.PORT || 3001
}