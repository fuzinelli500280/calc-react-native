import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const {width, height} = Dimensions.get("window")

export default props => {

  const estilosBotao = [estilos.botao]
  if(props.duplo) estilosBotao.push(estilos.botaoDuplo)
  if(props.triplo) estilosBotao.push(estilos.botaoTriplo)
  if(props.colorido) estilosBotao.push(estilos.botaoColorido)

  return (
    <TouchableHighlight>
        <Text style={estilosBotao}>{props.label}</Text>
    </TouchableHighlight>
  )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        height: 100,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
    },
    botaoDuplo: {
      width: width/4 * 2
    },
    botaoTriplo: {
      width: width/4 * 3
    },
    botaoColorido: {
      backgroundColor: "#b87e14",
      color: "#fff"
    }
})
