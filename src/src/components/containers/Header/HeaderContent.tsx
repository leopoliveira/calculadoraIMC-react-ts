import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from './Header.module.css'

type Props = {
  onClick?: () => void;
}

export const HeaderContent = (props: Props) => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col>
          <Button onClick={props.onClick} variant='info' size='sm'>IMC</Button>
          <span className={styles.fontBold}> Powered by Leonardo</span>
        </Col>
      </Row>
    </Container>
  );
}