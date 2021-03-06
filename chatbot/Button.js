import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${(props) => {
    if (props.disabled && !props.invalid) {
      return '#ddd';
    }
    return props.invalid ? '#E53935' : props.backgroundColor;
  }};
  height: 50;
  width: 50;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;


// border-top-left-radius: 12;