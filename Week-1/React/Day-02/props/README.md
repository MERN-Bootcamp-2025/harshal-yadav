# React ProfileCard Component

## 💡 Overview
Reusable `ProfileCard` component to display user info including avatar, name, title, bio, skills, contact, and social links. Supports `compact` and `detailed` layouts using props.

## 🔧 How to Run
1. Clone repo
2. Run `npm install`
3. Start dev server: `npm start`

## 🧩 Props Design

| Prop     | Type     | Default     | Description                      |
|----------|----------|-------------|----------------------------------|
| `name`   | string   | "Anonymous" | User's full name                 |
| `title`  | string   | "No Title"  | Professional title               |
| `avatar` | string   | Placeholder | Avatar image URL                 |
| `bio`    | string   | —           | Optional biography               |
| `skills` | array    | `[]`        | List of technical skills         |
| `email`  | string   | —           | Contact email                    |
| `socials`| array    | `[]`        | Social media links               |
| `layout` | string   | 'detailed'  | 'compact' or 'detailed' view     |

## ✅ Features

- Conditional rendering for missing props
- Responsive layout with Flexbox
- Uses semantic HTML and JSX
- Three demo users with varied data

## 🖼️ Screenshots
- [ ] Harshal (detailed)
- [ ] Jane (compact)
- [ ] John (missing social & skills)

## 🚀 Future Enhancements
- Add theme toggling
- Integrate prop-types or TypeScript
