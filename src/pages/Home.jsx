import React, { useState } from 'react';
import './Home.css'
import BlogList from '../components/BlogList/BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState([
    {
      id: Math.random(),
      image: 'https://www.developer-tech.com/wp-content/uploads/sites/3/2022/07/opentdf-trusted-data-format-virtru-cyber-security-cybersecurity-2048x1365.jpg',
      title: 'Introducing OpenTDF: Open source, accessible security for developers',
      body: "At Virtru, we believe that the ability to securely share data is essential — and that privacy is a human right that must be protected. It’s a mission we have stuck by since we started in 2011, and sees us supporting over 7,000 organisations worldwide to protect their most valuable asset, their data, with Zero-Trust security and powerful, granular policy controls that tie identity to data, everywhere it moves.",
      category: 'Open Source',
      author: {
        name: 'Ryan Daws',
        avatar: 'https://www.iottechnews.com/wp-content/uploads/sites/5/2022/07/profile-pic.jpg'
      },
      createdAt: new Date('2022-08-11').toLocaleString(),
    },
    {
      id: Math.random(),
      image: 'https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEhC3Iy6UpMBB_QsQaU83ajVYYyqWORtUjF4GNg_TRIP6p-5hy6AeLHsUIQOoY8nCSsnhnzOoM_KM6gDRHP-LsH7XCMhmy-a23W2V4Woyxq3BvZ3PAE9hIg0LRYl_5tWCzYS8Ctzae7UTjr9Am__aBXqB2ivgo_PKBrqdUPC3MTw9oNc-xmaiEzD3_Pf/s728-e1000/talos.jpg',
      title: 'Hackers Use ModernLoader to Infect Systems with Stealers and Cryptominers',
      body: "As many as three disparate but related campaigns between March and Jun 2022 have been found to deliver a variety of malware, including ModernLoader, RedLine Stealer, and cryptocurrency miners onto compromised systems",
      category: 'Hacking',
      author: {
        name: 'Ravie Lakshmanan',
        avatar: 'https://blog.mazebolt.com/hs-fs/hubfs/ravie_lakshmanan.jpg?width=150&name=ravie_lakshmanan.jpg'
      },
      createdAt: new Date('2022-08-18').toLocaleString(),
    },
    {
      id: Math.random(),
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--VOYxGSu4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2AFE3KE3VOqec44eXbmWFBzw.png',
      title: 'Serverless Is the New Timeshare',
      body: "Are banks no longer in need of consistency? If you aren’t on the “same page” this technology works by transferring the transactional context between separate servers. So a commit on one server was a multi-stage process that pretty much guaranteed all servers succeeded or rolled back as one. This was pretty amazing and actually worked reasonably well (with caveats obviously). Amazingly, this worked via method invocation. You didn’t need to do anything. Even when invoking a remote method on a completely different server. It “just worked”.",
      category: 'DevOps',
      author: {
        name: 'Shai Almog',
        avatar: 'https://dz2cdn3.dzone.com/thumbnail?fid=207508&w=80'
      },
      createdAt: new Date('2022-08-11').toLocaleString(),
    },
  ]
)


  return <section className='home-container'>
    <BlogList 
      blogs={blogs}
    />
  </section>;
};

export default Home;
