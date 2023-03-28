async function main() {
  if (
    !process.env.VERCEL &&
    !process.env.DEBUG &&
    !process.env.NETLIFY &&
    !process.env.NEXT_PUBLIC_WIX_CLIENT_ID
  ) {
    console.log('This script should only be run on Vercel or Netlify');
    return;
  }
  const ourProjects = 'Our-Projects';
  const descriptions = {
    short_description:
      'This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.',
    long_description:
      'This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to open the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more. Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more. ',
  };
  await fetch(
    `https://manage.wix.com/headless-funnel-nextjs/api/collections/add?refreshToken=${process.env.REFRESH_TOKEN}&state={"provider":"vercel"}&clientId=${process.env.NEXT_PUBLIC_WIX_CLIENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: {
          collection: {
            display_name: ourProjects.replaceAll('-', ' '),
            paging_modes: [],
            plugins: [],
            fields: [
              {
                key: 'title',
                display_name: 'Title',
                type: 'TEXT',
              },
              {
                key: 'slug',
                display_name: 'slug',
                type: 'TEXT',
              },
              {
                key: 'short_description',
                display_name: 'Short Description',
                type: 'TEXT',
              },
              {
                key: 'gallery',
                display_name: 'Gallery',
                type: 'MEDIA_GALLERY',
              },
              {
                key: 'cover',
                display_name: 'Cover',
                type: 'IMAGE',
              },
              {
                key: 'long_description',
                display_name: 'Long Description',
                type: 'TEXT',
              },
            ],
            id: ourProjects,
            permissions: {
              insert: 'ADMIN',
              update: 'ADMIN',
              remove: 'ADMIN',
              read: 'ANYONE',
            },
          },
        },
        bulkAdd: {
          dataCollectionId: ourProjects,
          items: [
            {
              slug: 'annual-tech-challenge',
              title: 'Annual Tech Challenge',
              ...descriptions,
              cover:
                'https://static.wixstatic.com/media/84770f_878098e5beb14c1aadfe0539d9ac7f82~mv2_d_5760_3840_s_4_2.jpg',
              gallery: [
                {
                  src: 'https://static.wixstatic.com/media/0b340f_47227c4902b24f82a2e0c31c6a7b43e9~mv2_d_6144_4080_s_4_2.jpeg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_73596efb22404db79ae0509483011f11~mv2_d_5500_3668_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_63ddb02c4fb8422aba47f763daacf20f~mv2_d_7360_4912_s_4_2.jpg',
                  type: 'image',
                },
              ],
            },
            {
              slug: 'adopt-a-student',
              title: 'Adopt a Student',
              ...descriptions,
              cover:
                'https://static.wixstatic.com/media/0b340f_12ead601f2dc4867a7bf09ce72ebad64~mv2_d_5184_3456_s_4_2.jpg',
              gallery: [
                {
                  src: 'https://static.wixstatic.com/media/0b340f_500d58b4817543fa9332a5c8cd16da9b~mv2_d_4992_3328_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_12a3df7a305e4da1953de653b51ec53f~mv2_d_8660_5773_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_afa281ea9c5140068ebc823b6204c220~mv2_d_3491_2327_s_2.jpg',
                  type: 'image',
                },
              ],
            },
            {
              title: 'Transportation for Youth',
              slug: 'transportation-for-youth',
              ...descriptions,
              cover:
                'https://static.wixstatic.com/media/84770f_02295d8cd2e24277aa38c26a150c3aaa~mv2_d_5760_3840_s_4_2.jpeg',
              gallery: [
                {
                  src: 'https://static.wixstatic.com/media/0b340f_08df6332d70b4ce687f7dcc0cf7da2d5~mv2_d_3000_2000_s_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_36f008b11e494ff98dd0e1119bb7cbaf~mv2_d_5760_3840_s_4_2.jpeg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_5301c9dc5d5048798f13c3f5ce287ead~mv2_d_3577_2355_s_2.jpg',
                  type: 'image',
                },
              ],
            },
            {
              title: 'English for All',
              slug: 'english-for-all',
              ...descriptions,
              cover:
                'https://static.wixstatic.com/media/84770f_8728d6e0d6404b9d97f1ccdbd30ffe3c~mv2_d_5760_3840_s_4_2.jpg',
              gallery: [
                {
                  src: 'https://static.wixstatic.com/media/0b340f_2a8a650b4d434a7d9b023e1df6e23325~mv2_d_4592_2584_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_83c0234815c84000a3b5a658270b89aa~mv2_d_4356_3083_s_4_2.jpg',
                  type: 'image',
                },
              ],
            },
            {
              title: 'Literacy Development',
              slug: 'literacy-development',
              ...descriptions,
              cover:
                'https://static.wixstatic.com/media/84770f_6e4797d2cf2b488fadc208485986bfdd~mv2_d_4395_2933_s_4_2.jpg',
              gallery: [
                {
                  src: 'https://static.wixstatic.com/media/0b340f_e1620d766d04493fb170fe9d2a7b1650~mv2_d_8192_5462_s_4_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_9d7d78f243ed44cbbf0cb5b5d185a6b7~mv2_d_2560_1440_s_2.jpg',
                  type: 'image',
                },
                {
                  src: 'https://static.wixstatic.com/media/0b340f_a1f0f223bd694e468f47433a0f274afb~mv2_d_4896_3264_s_4_2.jpg',
                  type: 'image',
                },
              ],
            },
          ],
        },
      }),
    }
  );
  const ourTeam = 'Our-Team';
  await fetch(
    `https://manage.wix.com/headless-funnel-nextjs/api/collections/add?refreshToken=${process.env.REFRESH_TOKEN}&state={"provider":"vercel"}&clientId=${process.env.NEXT_PUBLIC_WIX_CLIENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: {
          collection: {
            display_name: ourTeam.replaceAll('-', ' '),
            paging_modes: [],
            plugins: [],
            fields: [
              {
                key: 'name',
                display_name: 'Name',
                type: 'TEXT',
              },
              {
                key: 'email',
                display_name: 'Email',
                type: 'TEXT',
              },
              {
                key: 'about',
                display_name: 'About',
                type: 'TEXT',
              },
              {
                key: 'image',
                display_name: 'Image',
                type: 'IMAGE',
              },
              {
                key: 'alt',
                display_name: 'Alt',
                type: 'TEXT',
              },
            ],
            id: ourTeam,
            permissions: {
              insert: 'ADMIN',
              update: 'ADMIN',
              remove: 'ADMIN',
              read: 'ANYONE',
            },
          },
        },
        bulkAdd: {
          dataCollectionId: ourTeam,
          items: [
            {
              name: 'James Hogan',
              image:
                'https://static.wixstatic.com/media/84770f_bc8a00b8393b4497979a2e467e84a3c2~mv2_d_4821_3252_s_4_2.jpg',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content.',
            },
            {
              name: 'Nitin Chet',
              image:
                'https://static.wixstatic.com/media/84770f_ac86c334b3ab4cbd95b5f23d870a1646~mv2_d_6720_4480_s_4_2.jpg',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content.',
            },
            {
              name: 'Jeanette Dhay',
              image:
                'https://static.wixstatic.com/media/84770f_7659769faf854aebb27ff143721ea13c~mv2_d_6720_4480_s_4_2.jpg',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content.',
            },
            {
              name: 'Katie Franklin',
              image:
                'https://static.wixstatic.com/media/84770f_379c133dca1f42d6ade23ac6a1c0e0c2~mv2_d_6038_4140_s_4_2.jpg',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content.',
            },
          ],
        },
      }),
    }
  );

  const volunteers = 'Volunteers';
  await fetch(
    `https://manage.wix.com/headless-funnel-nextjs/api/collections/add?refreshToken=${process.env.REFRESH_TOKEN}&state={"provider":"vercel"}&clientId=${process.env.NEXT_PUBLIC_WIX_CLIENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: {
          collection: {
            display_name: volunteers.replaceAll('-', ' '),
            paging_modes: [],
            plugins: [],
            fields: [
              {
                key: 'name',
                display_name: 'Name',
                type: 'TEXT',
              },
              {
                key: 'email',
                display_name: 'Email',
                type: 'TEXT',
              },
              {
                key: 'about',
                display_name: 'About',
                type: 'TEXT',
              },
            ],
            id: volunteers,
            permissions: {
              insert: 'ADMIN',
              update: 'ADMIN',
              remove: 'ADMIN',
              read: 'ANYONE',
            },
          },
        },
        bulkAdd: {
          dataCollectionId: volunteers,
          items: [
            {
              name: 'Alice Boldwin',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Darrell Kennedy',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Derek Castillo',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Harvey Holmes',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Kelvin Boone',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Martin Scott',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Sonya Harper',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
            {
              name: 'Tracy Spencer',
              email: 'info@mysite.com',
              about:
                'This item is connected to a text field in your content collection. Double click to add your own content',
            },
          ],
        },
      }),
    }
  );

  const news = 'News';
  await fetch(
    `https://manage.wix.com/headless-funnel-nextjs/api/collections/add?refreshToken=${process.env.REFRESH_TOKEN}&state={"provider":"vercel"}&clientId=${process.env.NEXT_PUBLIC_WIX_CLIENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payload: {
          collection: {
            display_name: news.replaceAll('-', ' '),
            paging_modes: [],
            plugins: [],
            fields: [
              {
                key: 'title',
                display_name: 'Title',
                type: 'TEXT',
              },
              {
                key: 'short_description',
                display_name: 'Short Description',
                type: 'TEXT',
              },
              {
                key: 'long_description',
                display_name: 'Long Description',
                type: 'TEXT',
              },
              {
                key: 'image',
                display_name: 'Image',
                type: 'IMAGE',
              },
              {
                key: 'date',
                display_name: 'date',
                type: 'DATETIME',
              },
              {
                key: 'slug',
                display_name: 'Slug',
                type: 'TEXT',
              },
            ],
            id: news,
            permissions: {
              insert: 'ADMIN',
              update: 'ADMIN',
              remove: 'ADMIN',
              read: 'ANYONE',
            },
          },
        },
        bulkAdd: {
          dataCollectionId: news,
          items: [
            {
              title: '10 Reasons Why School Uniform Matter',
              slug: '10-reasons-why-school-uniform-matter',
              ...descriptions,
              date: '2023-06-01T00:00:00.000Z',
              image:
                'https://static.wixstatic.com/media/84770f_6b46ae803eca48f498cf43536e30e64f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg 1x, https://static.wixstatic.com/media/84770f_6b46ae803eca48f498cf43536e30e64f~mv2_d_5616_3744_s_4_2.jpg',
            },
            {
              title: 'The Role of Sports in the Education System',
              slug: 'the-role-of-sports-in-the-education-system',
              ...descriptions,
              date: '2023-04-01T00:00:00.000Z',
              image:
                'https://static.wixstatic.com/media/84770f_4ae8f1ff8ff9489daf727ab6b88d0414~mv2_d_4240_2832_s_4_2.jpg',
            },
            {
              title: "Protecting Our Children's Privacy",
              slug: 'protecting-our-childrens-privacy',
              ...descriptions,
              date: '2023-04-01T00:00:00.000Z',
              image:
                'https://static.wixstatic.com/media/84770f_e9b1a996de0049e99df46af2a64895fd~mv2_d_4446_3334_s_4_2.jpg',
            },
            {
              title: 'Spring 2023 High School Curriculum',
              slug: 'spring-2023-high-school-curriculum',
              ...descriptions,
              date: '2023-10-01T00:00:00.000Z',
              image:
                'https://static.wixstatic.com/media/84770f_3472f565af6749eb81d28318b1edf5f4~mv2_d_4505_3003_s_4_2.jpg',
            },
            {
              title: 'Recent Classrooms Renovations',
              slug: 'recent-classrooms-renovations',
              ...descriptions,
              date: '2023-08-01T00:00:00.000Z',
              image:
                'https://static.wixstatic.com/media/84770f_cc96ed8fbbcb4027aba8dc721e16e05e~mv2_d_3617_5425_s_4_2.jpg',
            },
          ],
        },
      }),
    }
  );
}

main();
