import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecretoState } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    
    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoDoAmigoSecretoState)
    
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}