import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from '../Global';
import Ionicons from "@expo/vector-icons/Ionicons"
import { ContHeader } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

export default function Header( props ){
  const navigation = useNavigation();
  return (
    <ContHeader>
        <Ionicons onPress={() =>  navigation.goBack()}  name="chevron-back-outline" size={24} color="#D3d3d3"/>
        <Title>{props.name}</Title>
        <Icon size={24} color="gray" name="help-circle" />

    </ContHeader>
  );
}