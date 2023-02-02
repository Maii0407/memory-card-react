import {
  Flex,
  Image,
  useToast
} from "@chakra-ui/react";

export const PlayCards = ({ data }) => {
  const toast = useToast();

  const handleClick = () => {
    toast({
      title: data.name,
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true
    })
  }

  return (
    <Image
      onClick={ () => handleClick() }
      src={ data.img }
      alt={ data.name }
    />
  );
}