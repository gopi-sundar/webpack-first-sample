import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

export default function () {
    const image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
};
