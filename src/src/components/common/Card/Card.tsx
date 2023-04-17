import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from './Card.module.css';

type Props = {
  imageSource: string;
  imageAlt?: string;
  color: string;
  title: string;
  body: string;
  footer?: string;
}

export const Card = (props: Props) => {
  return (
    <Container className='text-center p-3 mb-3' style={{backgroundColor: props.color}}>
      <Row className='justify-content-center'>
        <div className={styles.imgBackground}>
          <img className={styles.img} src={props.imageSource} alt={props.imageAlt} />
        </div>
      </Row>
      <Row className='justify-content-center mt-2'>
        {props.title}
      </Row>
      <Row className='justify-content-center mt-2'>
        {props.body}
      </Row>
      <Row className='justify-content-center mt-2'>
        {props.footer}
      </Row>
    </Container>
  );
}