import { useRecoilValue } from "recoil"
import { resultadoDoAmigoSecretoState } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoDoAmigoSecretoState)
}