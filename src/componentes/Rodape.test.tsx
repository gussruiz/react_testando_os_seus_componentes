import { fireEvent, render, screen } from "@testing-library/react"
import  React  from "react"
import {RecoilRoot} from 'recoil'
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import Rodape from "./Rodape"

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockDeNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockDeNavegacao
    }
})

describe('onde existem não participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
}) 


describe('quando existem participantes suficientes', () => {
    const participantes = ['Ana', 'Catarina', 'Larissa']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    
    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockDeNavegacao).toHaveBeenCalledTimes(1)
        expect(mockDeNavegacao).toHaveBeenCalledWith('/sorteio')
    })
}) 