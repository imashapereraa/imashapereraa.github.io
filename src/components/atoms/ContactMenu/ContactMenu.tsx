import styled from 'styled-components';


const LogoIcon = styled.i`
  width: 22px;
  height: 22px;
`;

const LinkLogo = styled.a`
  width: 22px;
  height: 22px;
  text-decoration: underline;  
  color:black;
  
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 990px) {
  	margin-top: -10px;
	margin-bottom: -10px;
  }
  `;


const ContactGroup = styled.div`
  background-color: transparent;
  border: 1px solid #dee2e6;
  border: none; 
`;

const ContactInfo = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: flex-start;
	gap: 0px
  }
`;

const InfoGroup = styled.span`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between the icon and the text */
  white-space: nowrap; /* Ensure the text does not wrap within the group */
  width: 22px;
  height: 22px;
  margin-left: 2px;
  margin-right: 2px;

  @media (min-width: 768px) {
    flex-direction: row;
	margin-right: 90px;
  }

  @media (max-width: 990px) {
  	margin-top: -10px;
	margin-bottom: -10px;
  }
`;

export const ContactMenu = () => {
	return (
		<ContactGroup>
			<ContactInfo>
				<LinkLogo href='https://www.linkedin.com/in/imashaperera/' target="_blank" rel="noopener noreferrer">
					<LogoIcon className='bi bi-linkedin' />
				</LinkLogo>
				&ensp;
				<LinkLogo href='https://github.com/imashapereraa' target="_blank" rel="noopener noreferrer">
					<LogoIcon className='bi bi-github' />
				</LinkLogo>
				&ensp;
				<InfoGroup>
					<LogoIcon className='bi bi-phone' />
					0416235620
				</InfoGroup>
				&ensp;
				<InfoGroup>
					<LogoIcon className='bi bi-envelope' />
					imashapereraa@gmail.com
				</InfoGroup>
			</ContactInfo>
		</ContactGroup>
	);
};

export default ContactMenu;
