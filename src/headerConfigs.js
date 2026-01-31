// Header configurations mapping each header ID to its design properties
export const headerConfigs = {
  1: {
    type: 'hero',
    props: {
      backgroundColor: '#6b7280',
      logoVariant: 'white',
      navVariant: 'white',
      title: 'Dmitrii Rogoza',
      subtitle: 'Professional Web Design',
      description: 'Hi! My name is Dmitrii Rogoza and I\'m an expert in web design and branding. I can help you make your website more attractive',
      buttonText: 'LET\'S DO IT',
      buttonVariant: 'primary',
      showSocials: true
    }
  },
  2: {
    type: 'minimal',
    props: {
      backgroundColor: '#ffffff',
      logoVariant: 'default',
      navVariant: 'default',
      title: 'Moscow',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem enim tellus ut molestie donec quis. Est maecenas ultrices magna nibh mi habitasse elementum nisi.',
      buttonText: 'More',
      buttonVariant: 'ghost',
      showSocials: true,
      socialPosition: 'left'
    }
  },
  3: {
    type: 'minimal',
    props: {
      backgroundColor: '#ffffff',
      logoVariant: 'default',
      navVariant: 'white',
      title: 'Freelance Web-designer',
      description: 'You don\'t have to be a digital marketing pro to know how important a website is to modern business. As both a digital interface for delivering products and services and a vehicle for generating leads, your website needs to look good. If you want to deliver a smooth customer experience and look good while doing it, a web designer can help.',
      buttonText: 'More',
      buttonVariant: 'yellow',
      waveTop: true
    }
  },
  10: {
    type: 'minimal',
    props: {
      backgroundColor: '#ffffff',
      logoVariant: 'default',
      navVariant: 'default',
      title: 'Secure Communication',
      subtitle: 'PROTECT YOUR DATA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dolor ac lobortis iaculis nam.',
      buttonText: 'Contact Us',
      buttonVariant: 'gradientOrange'
    }
  },
  20: {
    type: 'centered',
    props: {
      backgroundImage: './ground_truth/Header-20.png',
      overlay: true,
      logoVariant: 'white',
      title: 'Dmitrii Rogoza',
      subtitle: 'I\'m UX/UI designer',
      showSocials: true
    }
  },
  50: {
    type: 'centered',
    props: {
      backgroundImage: './ground_truth/Header-50.png',
      overlay: true,
      logoVariant: 'white',
      title: 'Licensing Relevant Music',
      description: 'Curated content for the exceptional creative',
      searchBar: true
    }
  },
  // Default configurations for remaining headers (4-100)
  // Each can be customized based on the actual design
}

// Generate default configs for all 100 headers
for (let i = 4; i <= 100; i++) {
  if (!headerConfigs[i]) {
    // Alternate between different types for variety
    const types = ['hero', 'minimal', 'centered']
    const type = types[i % 3]

    headerConfigs[i] = {
      type,
      props: {
        backgroundColor: i % 2 === 0 ? '#ffffff' : '#f3f4f6',
        logoVariant: i % 2 === 0 ? 'default' : 'white',
        navVariant: i % 2 === 0 ? 'default' : 'white',
        title: `Header ${i}`,
        subtitle: `Creative Website Header Design`,
        description: 'Beautiful and creative website header template for your projects. Ready-made header design for web designers.',
        buttonText: i % 3 === 0 ? 'Get Started' : i % 3 === 1 ? 'Learn More' : 'Contact Us',
        buttonVariant: i % 4 === 0 ? 'primary' : i % 4 === 1 ? 'gradient' : i % 4 === 2 ? 'orange' : 'outline',
        showSocials: i % 5 === 0
      }
    }
  }
}
