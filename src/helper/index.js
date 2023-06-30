import StarOutlineIcon from '../components/icons/star';
import StarFillIcon from '../components/icons/starFill';

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export const ratingStar = (rate) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<StarFillIcon key={i} />);
    } else {
      stars.push(<StarOutlineIcon key={i} />);
    }
  }

  return stars;
}

export const getDuration = (duration) => {
  const minutes = Math.floor(duration / 60); // Số phút
  const seconds = Math.floor(duration % 60); // Số giây

  const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return formattedDuration;
}