import { type FieldValues } from 'react-hook-form'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'src/helpers/base-query'

import { ReducerPath } from 'src/helpers/consts'
import {
	type AdPromoInfoResponse,
	type AdReklamaInfoResponse,
	type AdRewardInfoResponse,
	type PageInfoInfoResponse,
	type PageInfoNewIdResponse,
	type PageInfoResponse,
} from 'src/types/marketing'

export const marketingApi = createApi({
	reducerPath: ReducerPath.Marketing,
	tagTypes: ['Marketing', 'MainInfo', 'Reward', 'Ad', 'Promo'],
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
		getAdPromoInfo: build.query<AdPromoInfoResponse, null>({
			query: () => ({
				url: `promo/edit`,
			}),
			providesTags: ['Promo'],
		}),
		saveAdPromoInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `promo/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['Promo'],
		}),
		getAdReklamaInfo: build.query<AdReklamaInfoResponse, null>({
			query: () => ({
				url: `adv/edit`,
			}),
			providesTags: ['Ad'],
		}),
		saveAdReklamaInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `adv/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['Ad'],
		}),
		getAdRewardInfo: build.query<AdRewardInfoResponse, null>({
			query: () => ({
				url: `awards/edit`,
			}),
			providesTags: ['Reward'],
		}),
		saveAdRewardInfo: build.mutation<string, FieldValues>({
			query: (FormData) => ({
				url: `awards/save`,
				method: 'POST',
				body: FormData,
			}),
			invalidatesTags: ['Reward'],
		}),
	}),
})

export const {
	useDeletePageInfoByIdMutation,
	useGetAllPagesInfoQuery,
	useGetNewIdPageInfoQuery,
	useGetPageInfoInfoQuery,
	useSavePageInfoInfoMutation,
	useGetAdPromoInfoQuery,
	useGetAdReklamaInfoQuery,
	useGetAdRewardInfoQuery,
	useSaveAdPromoInfoMutation,
	useSaveAdReklamaInfoMutation,
	useSaveAdRewardInfoMutation,
} = marketingApi
