# Module 08, Day 01 — Solution: SQL vs NoSQL Comparison

## Task 1: List 5 Apps You Use Daily

| App | Data Stored |
|-----|------------|
| 1. WhatsApp | Messages, contacts, group info, media files, status updates |
| 2. Instagram | Posts, stories, user profiles, followers, comments, likes |
| 3. Gmail | Emails, contacts, labels, drafts, attachments, settings |
| 4. Spotify | Songs, playlists, listening history, user preferences, artists |
| 5. M-Pesa | Transactions, balances, phone numbers, PINs, agent info |

## Task 2: Design a SQL Schema (Library System)

**books table:**
| Column | Type | Notes |
|--------|------|-------|
| id | INTEGER | Primary key, auto-increment |
| title | TEXT | Book title |
| author | TEXT | Author name |
| genre | TEXT | e.g. Fiction, Science, History |
| year_published | INTEGER | Year the book was published |
| is_available | BOOLEAN | true if book is on shelf |

**members table:**
| Column | Type | Notes |
|--------|------|-------|
| id | INTEGER | Primary key, auto-increment |
| name | TEXT | Member's full name |
| email | TEXT | Unique email address |
| membership_date | DATE | When they joined |

**loans table:**
| Column | Type | Notes |
|--------|------|-------|
| id | INTEGER | Primary key, auto-increment |
| book_id | INTEGER | Foreign key → books.id |
| member_id | INTEGER | Foreign key → members.id |
| borrow_date | DATE | When book was borrowed |
| return_date | DATE | When book was/should be returned (nullable) |

## Task 3: Design a NoSQL Document (Library System)

```json
{
    "_id": "book_001",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Software Engineering",
    "year_published": 2008,
    "is_available": false,
    "loans": [
        {
            "member_name": "Lucky",
            "member_email": "lucky@email.com",
            "borrow_date": "2026-03-01",
            "return_date": "2026-03-15"
        },
        {
            "member_name": "Grace",
            "member_email": "grace@email.com",
            "borrow_date": "2026-04-01",
            "return_date": null
        }
    ]
}
```

## Task 4: Compare the Approaches

**3 advantages of SQL for a library system:**
1. Relationships between books, members, and loans are clearly defined with foreign keys — no data duplication
2. Data integrity is enforced — you can't loan a book to a member that doesn't exist
3. Complex queries are easy — "Show all books borrowed by Grace in March" is a simple JOIN

**3 advantages of NoSQL for a library system:**
1. Fast reads — all book info including loan history is in one document, no JOINs needed
2. Flexible schema — easy to add fields like "reviews" or "tags" without altering a table
3. Quick to set up — no migrations or schema design needed upfront, great for prototyping
