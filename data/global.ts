type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/"
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/Matyyn",
          icon: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2Fgithub%20icon.png?alt=media&token=2d010d05-1067-44d9-bbc1-2ee21af8f077`,
          leavesWebsite: true
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/abdulmateen004/",
          icon: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FlinkedIn%20icon.png?alt=media&token=dc8fb776-3cd0-463c-841d-5df3b28548f0`,
          leavesWebsite: true
        },
        {
          name: "Email",
          link: "mailto:matyyn.004@gmail.com",
          icon: `https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2Fmail_icon.png?alt=media&token=e69ee556-23e8-46cb-a4f5-afc5d8196ac5`,
          leavesWebsite: true
        }
      ]
    }
  ],
  support: {
    buymeacoffee: "miteshtagap",
    paypal: "miteshtagadiya",
    message: "I appreciate your support very much! 💙"
  }
};
