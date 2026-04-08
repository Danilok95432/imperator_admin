import { type FieldValues } from 'react-hook-form'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'src/helpers/base-query'

import { ReducerPath } from 'src/helpers/consts'
import {
	type PageInfoInfoResponse,
	type PageInfoNewIdResponse,
	type PageInfoResponse,
} from 'src/types/marketing'

export const marketingApi = createApi({
	reducerPath: ReducerPath.Marketing,
	tagTypes: ['Marketing', 'MainInfo'],
	baseQuery: baseQueryWithReauth,
	endpoints: (build) => ({
		getAllPagesInfo: build.query<PageInfoResponse, { pageName?: string }>({
			query: ({ pageName }) => ({
				url: 'pageinfo/list',
				params: {
					pageName,
				},
			}),
			providesTags: ['MainInfo'],
		}),
		getNewIdPageInfo: build.query<PageInfoNewIdResponse, null>({
			query: () => ({
				url: `pageinfo/getnew`,
			}),
			providesTags: ['MainInfo'],
		}),
		deletePageInfoById: build.mutation<null, string>({
			query: (pageInfoId) => ({
				url: `pageinfo/delete`,
				method: 'DELETE',
				body: { id: pageInfoId },
			}),
			invalidatesTags: ['MainInfo'],
		}),
		getPageInfoInfo: build.query<PageInfoInfoResponse, string>({
			query: (id) => ({
				url: `pageinfo/edit`,
				params: {
					id,
				},
			}),
			providesTags: ['MainInfo'],
		}),
		savePageInfoInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `pageinfo/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['MainInfo'],
		}),
	}),
})

export const {
	useDeletePageInfoByIdMutation,
	useGetAllPagesInfoQuery,
	useGetNewIdPageInfoQuery,
	useGetPageInfoInfoQuery,
	useSavePageInfoInfoMutation,
} = marketingApi
