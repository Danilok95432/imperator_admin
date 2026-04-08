import { type FieldValues } from 'react-hook-form'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'src/helpers/base-query'

import { ReducerPath } from 'src/helpers/consts'
import {
	type CustomerInfoResponse,
	type CustomerNewIdResponse,
	type CustomerResponse,
} from 'src/types/customers'

export const customerApi = createApi({
	reducerPath: ReducerPath.Customers,
	tagTypes: ['Customers', 'CustomerInfo'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllCustomers: build.query<
			CustomerResponse,
			{ customer?: string; phone?: string; date?: string }
		>({
			query: ({ customer, phone, date }) => ({
				url: 'customers/list',
				params: {
					customer,
					phone,
					date,
				},
			}),
			providesTags: ['Customers'],
		}),
		getNewIdCustomer: build.query<CustomerNewIdResponse, null>({
			query: () => ({
				url: `customers/getnew`,
			}),
			providesTags: ['Customers'],
		}),
		deleteCustomerById: build.mutation<null, string>({
			query: (customerId) => ({
				url: `customers/delete`,
				method: 'DELETE',
				body: { id: customerId },
			}),
			invalidatesTags: ['Customers'],
		}),
		getCustomerInfo: build.query<CustomerInfoResponse, string>({
			query: (id) => ({
				url: `customers/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['Customers', 'CustomerInfo'],
		}),
		saveCustomerInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `customers/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['Customers', 'CustomerInfo'],
		}),
	}),
})

export const {
	useGetAllCustomersQuery,
	useDeleteCustomerByIdMutation,
	useGetCustomerInfoQuery,
	useGetNewIdCustomerQuery,
	useSaveCustomerInfoMutation,
} = customerApi
