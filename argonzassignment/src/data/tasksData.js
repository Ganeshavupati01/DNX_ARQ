const tasksData = [
  
  {
    id: "t1",
    image: "https://oodlesstudio.files.wordpress.com/2016/09/mobile-app-wireframe.jpg", 
    title: "Designing Mobile App Wireframes",
    category: "UI/UX Design",
    subtasks: { total: 10, completed: 9 }, 
    timeLabel: "1 Hour",
    participants: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/women/46.jpg",
    ],
    section: "timeLimit",
  },
  {
    id: "t2",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=80&auto=format&fit=crop",
    title: "Frontend Development for Landing Page",
    category: "Web Development",
    subtasks: { total: 20, completed: 17 }, 
    timeLabel: "2 Hours",
    participants: [
      "https://randomuser.me/api/portraits/women/49.jpg",
      "https://randomuser.me/api/portraits/men/50.jpg",
    ],
    section: "timeLimit",
  },
  {
    id: "t3",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/252042807/original/f1135a5427bdfcd794cf006471b737bd5ab2ba53/design-your-database-schema.png",
    title: "Database Schema Setup",
    category: "Backend Development",
    subtasks: { total: 12, completed: 12 },
    timeLabel: "30 Minutes",
    participants: [
      "https://randomuser.me/api/portraits/men/52.jpg",
      "https://randomuser.me/api/portraits/women/53.jpg",
      "https://randomuser.me/api/portraits/men/54.jpg",
    ],
    section: "timeLimit",
  },
  {
    id: "t4",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop",
    title: "API Integration with Payment Gateway",
    category: "Backend Development",
    subtasks: { total: 15, completed: 10 }, 
    timeLabel: "3 Hours",
    participants: [
      "https://randomuser.me/api/portraits/women/55.jpg",
      "https://randomuser.me/api/portraits/men/56.jpg",
    ],
    section: "timeLimit",
  },
  {
    id: "t5",
    image: "https://tse3.mm.bing.net/th/id/OIP.qrhHHwe96sOauxlvjgJOcQHaE0?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Write Unit Tests for Components",
    category: "Testing",
    subtasks: { total: 8, completed: 5 }, 
    timeLabel: "45 Minutes",
    participants: [
      "https://randomuser.me/api/portraits/men/57.jpg",
      "https://randomuser.me/api/portraits/women/58.jpg",
    ],
    section: "timeLimit",
  },

  
  {
    id: "n1",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&auto=format&fit=crop",
    title: "Brainstorming Marketing Campaign",
    category: "Marketing",
    subtasks: { total: 6, completed: 2 }, 
    timeLabel: "3 Days Left",
    participants: [
      "https://randomuser.me/api/portraits/women/59.jpg",
      "https://randomuser.me/api/portraits/men/60.jpg",
    ],
    section: "newTask",
  },
  {
    id: "n2",
    image: "https://www.kajariadigital.com/blog/wp-content/uploads/2019/12/315654-P9L4NE-691-02.jpg",
    title: "Social Media Graphics Design",
    category: "UI/UX Design",
    subtasks: { total: 5, completed: 1 }, 
    timeLabel: "5 Days Left",
    participants: [
      "https://randomuser.me/api/portraits/women/61.jpg",
      "https://randomuser.me/api/portraits/men/62.jpg",
    ],
    section: "newTask",
  },
  {
    id: "n3",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80&auto=format&fit=crop",
    title: "Cloud Server Deployment",
    category: "DevOps",
    subtasks: { total: 7, completed: 3 }, 
    timeLabel: "2 Days Left",
    participants: [
      "https://randomuser.me/api/portraits/men/63.jpg",
      "https://randomuser.me/api/portraits/women/64.jpg",
    ],
    section: "newTask",
  },
  {
    id: "n4",
    image: "https://books.forbes.com/wp-content/uploads/2022/07/bigstock-Content-Writer-Or-Blogger-Sta-427512845.jpg",
    title: "Content Writing for Blog",
    category: "Content Writing",
    subtasks: { total: 12, completed: 4 }, 
    timeLabel: "6 Days Left",
    participants: [
      "https://randomuser.me/api/portraits/women/65.jpg",
      "https://randomuser.me/api/portraits/men/66.jpg",
    ],
    section: "newTask",
  },
  {
    id: "n5",
    image: "https://www.awebco.com/wp-content/themes/framework/img/SEO.png",
    title: "SEO Optimization for Website",
    category: "SEO / Marketing",
    subtasks: { total: 10, completed: 5 }, 
    timeLabel: "4 Days Left",
    participants: [
      "https://randomuser.me/api/portraits/men/67.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
    ],
    section: "newTask",
  },
];

export default tasksData;
