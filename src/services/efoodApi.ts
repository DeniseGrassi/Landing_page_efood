import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante } from '../models/efood'

// Tipos do checkout (payload e resposta)
export type CheckoutPayload = {
  products: { id: number; price: number }[]
  delivery: {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: { month: number; year: number }
    }
  }
}

export type CheckoutResponse = { orderId: string }

export const efoodApi = createApi({
  reducerPath: 'efoodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getRestauranteById: builder.query<Restaurante, string | number>({
      query: (id) => `/restaurantes/${id}`
    }),
    checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteByIdQuery,
  useCheckoutMutation
} = efoodApi


//coment