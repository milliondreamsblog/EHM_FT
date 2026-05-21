# API Documentation

This document lists all the available routes for the backend application, categorized by their primary function and access level.
by @exilonium

## Base URL

The application runs on `http://localhost:5000` by default.

---

## Admin Routes (Prefix: `/admin`)

Most routes require `AdminMiddleware` (JWT authentication).

### Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/login` | Admin login to receive JWT token. |
| `GET` | `/admin/me` | Retrieve current admin profile (Name and Email). |
| `POST` | `/admin/create` | Register a new admin (Only accessible by logged-in admins). |

### Blogs Management

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/blogs` | Create a new blog post (Supports `image` upload). |
| `PUT` | `/admin/blogs/:id` | Update an existing blog by ID. |
| `DELETE` | `/admin/blogs/:id` | Delete a blog by ID (Also removes image from Cloudinary). |

### Case Studies Management

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/casestudies` | Create a new case study (Supports `image` upload). |
| `PUT` | `/admin/casestudies/:id` | Update a case study by ID. |
| `DELETE` | `/admin/casestudies/:id` | Delete a case study by ID. |

### Articles Management

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/articles` | Create a new article (Supports `image` upload). |
| `PUT` | `/admin/articles/:id` | Update an article by ID. |
| `DELETE` | `/admin/articles/:id` | Delete an article by ID. |

### Newsletter Management

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/admin/subscribers` | List all newsletter subscribers. |

### Footprints Management

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/admin/footprints` | Create a new footprint entry (Supports `image` upload). |
| `DELETE` | `/admin/footprints/:id` | Delete a footprint entry by ID. |

---

## User Routes (Base Path: `/`)

These routes are public unless otherwise noted.

### Blogs

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/blogs` | Fetch all blogs (Sorted by newest). |
| `GET` | `/blogs/:id` | Fetch a specific blog by ID. |
| `GET` | `/blogs/author/:authorName` | Fetch blogs written by a specific author. |

### Case Studies

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/casestudies` | Fetch all case studies. |
| `GET` | `/casestudies/:id` | Fetch a specific case study by ID. |
| `GET` | `/casestudies/author/:authorName` | Fetch case studies by author. |

### Articles

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/articles` | Fetch all articles. |
| `GET` | `/articles/:id` | Fetch a specific article by ID. |

### Footprints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/footprints` | Fetch all footprint records. |
| `GET` | `/footprints/:id` | Fetch a specific footprint record. |

### Interaction

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/subscribe` | Subscribe an email to the newsletter. |
| `POST` | `/contact` | Submit a contact form (Rate-limited to 5 requests/15m). |
| `GET` | `/contacts` | Fetch all contact submissions (**Admin only**, requires JWT). |

### Videos (Prefix: `/videos`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/videos/videos` | Fetch video URLs from the `videos_folder/` on Cloudinary. |

---

## Utility & Static Files

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/hello` | Simple health check endpoint ("Hello World"). |
| `GET` | `/uploads/*` | Serves static files from the local `uploads/` directory. |

file by @exilonium
