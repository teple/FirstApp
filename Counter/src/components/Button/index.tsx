import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity``;
const Icon = styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

const Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          // 2x, 3x 이미지를 가지고 있다면, 단말기 화면에 맞는 사이즈를 불러와줌.
          iconName === 'plus'
            ? require('~/assets/images/add.png')
            : require('~/assets/images/remove.png')
        }
      />
    </Container>
  );
};

export default Button;
