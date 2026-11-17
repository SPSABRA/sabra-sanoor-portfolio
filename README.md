# Sabra Sanoor — Personal Portfolio

A responsive React + Vite portfolio presenting Sabra's ICT undergraduate journey, selected projects, skills, education, certificates, leadership and community experiences.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Highlights

- Persistent, scroll-aware navigation with a reading-progress indicator.
- Responsive layout with a dark-only visual theme.
- Interactive project filters and project case-study dialogs.
- Education timeline: An-Noor Central College (O/L), Kekunagolla National School (A/L), and South Eastern University of Sri Lanka (BICT; second year).
- Certificate coverflow with full-size previews.
- Leadership and community section featuring the My Sri Lanka Leaders Summit.
- Dedicated Sri Lanka Unites peer-mentoring and growing-together photo stories, with expandable images and an interactive mentoring-values panel.
- Scroll reveal, image hover, marquee and decorative motion effects, with reduced-motion support.

## Personal links

The Contact section uses compact icon-only links. The email icon is connected to `shabrasanoor@gmail.com`. Before publishing, replace `ADD_YOUR_LINKEDIN_PROFILE_URL` and `ADD_YOUR_GITHUB_PROFILE_URL` in the `PROFILE` object near the top of `src/main.jsx` with your exact profile URLs; the icons are visible but intentionally inactive until those real URLs are added. The Vehicle Parking Fee System repository link can be added to its project entry once the correct public URL is available.


## Final visual update
- Dark theme is the default and the theme switch has been removed.
- Added `public/images/sabra-award-milestone.jpg` as a new personal recognition photograph.
- Existing photographs, certificates, projects and mentoring gallery assets are preserved.


## Contact icon update
- Kept the existing Contact section layout and replaced text buttons with minimal Email, LinkedIn and GitHub icons.
- Email opens a new message to the portfolio email address.
- LinkedIn and GitHub become active external links once their exact URLs are entered in `PROFILE`.


## Final personalization notes

- The site keeps the dark-only visual theme and all supplied photographs and certificates.
- The added “My Learning Loop” section presents a distinctive Discover → Experiment → Share approach.
- Email is connected to `shabrasanoor@gmail.com`.
- LinkedIn and GitHub icon destinations are intentionally left unconfigured until the exact personal profile URLs are confirmed. A previous conversation contains the GitHub handle `@SabraSanoor`, but the matching public profile URL could not be verified; an earlier LinkedIn slug was only an example, not a confirmed user URL.
- To connect them later, set `PROFILE.linkedin` and `PROFILE.github` near the top of `src/main.jsx` to the exact profile URLs.
