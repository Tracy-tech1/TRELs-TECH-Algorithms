# TRELs-TECH Algorithms — website

A static website (HTML, CSS, JavaScript) that runs on Netlify with no build step.

## Pages
| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | Services (with buttons to the 3 project pages) |
| `projects/web-development.html` | Web development projects |
| `projects/ai-automation.html` | AI consulting & automation projects |
| `projects/ai-film.html` | AI film making projects |
| `purchase.html` | Ready-made websites & chatbots |
| `contact.html` | Contact details, inquiry form, policies |
| `reviews.html` | Reviews, complaints & recommendations |
| `thanks.html`, `404.html` | Form thank-you page, page-not-found |

## Edit contact details, links, products and prices
Open **`assets/js/config.js`**. Everything on the site reads from this one file:
- `whatsapp` — digits only with country code (e.g. `237670000000`)
- `whatsappDisplay`, `email`, `location`, `hours`
- `socials` — paste each link; empty ones stay hidden
- `products` — name, price (FCFA), features for the Purchase page
- `reviews` — real client reviews you have permission to publish

## Deploy (GitHub → Netlify)
1. Create a new GitHub repository, e.g. `trelstech-website`, and upload **all** files in this folder (keep the folder structure).
2. On netlify.com: **Add new site → Import an existing project → GitHub** → choose the repo.
3. Build command: *leave empty*. Publish directory: `/` (root). Click **Deploy**.
4. **Site configuration → Change site name** → `trelstech` → your site is `https://trelstech.netlify.app`.
5. Forms: after the first deploy, open **Forms** in Netlify and click **Enable form detection**, then redeploy. Submissions from the *inquiry* and *feedback* forms appear there.
6. Get email alerts: **Forms → Form notifications → Add notification → Email** → your brand email.

## Custom domain (later)
Buy `trelstech.com` (or similar), then Netlify → **Domain management → Add a domain** and follow the DNS steps.
