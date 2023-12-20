import Post from '..'
import { screen, render, fireEvent } from '@testing-library/react'

describe('Testes para o componente PostComments', ()=>{

    test('Deve renderizar o componente:', ()=>{
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    test('Deve adicionar 2 Posts', ()=>{
        const posts = ['Comentário 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Comentário 2: Harum eaque debitis fuga eos accusantium consectetur odio quas.']

        const {debug } = render(<Post />)

        const btn_add_post = screen.getByTestId('btn_add_post')
        const txt_post = screen.getByTestId('txt_post')
        posts.forEach((post) => {
            fireEvent.change(txt_post, {
                target: {
                    value: post
                }
            } )
            fireEvent.click(btn_add_post)

        })
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        posts.forEach((_, i) => {
            expect(screen.getByText(posts[i])).toBeInTheDocument()

        })
    })
})