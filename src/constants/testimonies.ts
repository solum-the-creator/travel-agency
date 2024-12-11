import authorImage1 from '@public/images/authors/author-1.jpg';
import authorImage2 from '@public/images/authors/author-2.jpg';
import authorImage3 from '@public/images/authors/author-3.jpg';
import authorImage4 from '@public/images/authors/author-4.jpg';
import authorImage5 from '@public/images/authors/author-5.jpg';

export type Author = {
  name: string;
  image: string;
};

export type Testimony = {
  id: number;
  date: string;
  text: string;
  rating: number;
  author: Author;
};

export const testimonies: Testimony[] = [
  {
    id: 1,
    date: '2023-01-09',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 5,
    author: {
      name: 'Anthony Bruff',
      image: authorImage1.src,
    },
  },
  {
    id: 2,
    date: '2023-01-09',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 4,
    author: {
      name: 'Jamiyu Aliyu',
      image: authorImage2.src,
    },
  },
  {
    id: 3,
    date: '2023-01-09',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 4.5,
    author: {
      name: 'John Doe',
      image: authorImage3.src,
    },
  },
  {
    id: 4,
    date: '2024-04-09',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 5,
    author: {
      name: 'Robert Smith',
      image: authorImage4.src,
    },
  },
  {
    id: 5,
    date: '2024-02-10',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 4,
    author: {
      name: 'Peter Smith',
      image: authorImage5.src,
    },
  },
  {
    id: 6,
    date: '2024-05-10',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 4.5,
    author: {
      name: 'Mark McCoy',
      image: authorImage1.src,
    },
  },
  {
    id: 7,
    date: '2024-07-02',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 5,
    author: {
      name: 'David Newman',
      image: authorImage3.src,
    },
  },
  {
    id: 8,
    date: '2024-02-07',
    text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.',
    rating: 4.5,
    author: {
      name: 'Timothy Kelly',
      image: authorImage4.src,
    },
  },
];
