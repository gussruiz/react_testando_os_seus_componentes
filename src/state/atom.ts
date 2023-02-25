import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const resultadoDoAmigoSecretoState = atom<Map<string, string>>({
    key: 'resultadoDoAmigoSecretoState',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})
