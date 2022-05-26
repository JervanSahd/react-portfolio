# My React Portfolio: React

A single-page application portfolio for a web developer. Employer looking for candidates with experience building single-page applications
want to view a potential employee's deployed React portfolio of work samples to assess whether they're a good candidate for an open position.

## Description

Being a web developer I've created a place not only to share my projects while applying for jobs or working as a freelancer but also to share my work with other developers and collaborate on projects. I've created a portfolio using my React skills deployed on Github.

## Acceptance Criteria

```md
- WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer

- WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

- WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

- WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

- WHEN I load the portfolio the first time THEN the About Me title and section are selected by default

- WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them

- WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

- WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message

- WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required

- WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

- WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

- WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Portfolio Build

- A single `Header` component that appears on multiple pages

- A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

- A single `Project` component that will be used multiple times in the Portfolio section

- A single `Footer` component that appears on multiple pages

**Note**: Doesn’t include a back end or connect to an API, the contact form doesn't save this information.

### Projects

For each project that is featured in your the following is included:

- An image of the deployed application

- The title of the project

- A link to the deployed application

- A link to the corresponding GitHub repository

### Design

- Mobile-first design.

- A color palette that distinguishes site from the default Bootstrap theme and unstyled HTML sites.

- The font size is large enough to read and that the colors don't cause eye strain.

- Use of animations and React component libraries.

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository, with a unique name and a README that describes the project.

https://github.com/JervanSahd/reactportfolio

---
