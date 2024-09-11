import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';


const LogoIcon = styled.i`
  width: 22px;
  height: 22px;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 5px;
`;

const LinkedinUnderLine = styled.a`
  text-decoration: underline;  
  color:black;
  
  &:hover {
    opacity: 0.5;
  }
  `;

export const ContactMenu = () => {
	return (
		<ListGroup horizontal>
			<ListGroup.Item>
				<LinkedinUnderLine href='https://www.linkedin.com/in/imashaperera/' target="_blank" rel="noopener noreferrer">
					Linkedin
					<LogoIcon className='bi bi-linkedin' />
				</LinkedinUnderLine>
			</ListGroup.Item>
			<ListGroup.Item>
				Phone <LogoIcon className="bi bi-phone" />
				: 0416235620
			</ListGroup.Item>
			<ListGroup.Item>
				Email <LogoIcon className='bi bi-envelope' />
				: imashapereraa@gmail.com
			</ListGroup.Item>

		</ListGroup>
	);
};

export default ContactMenu;
