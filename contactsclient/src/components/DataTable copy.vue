<template>
	<div id="app">
		<v-data-table :headers="headers" :items="items" class="elavation-1">
			<template v-slot:top>
				<v-dialog v-model="dialog" persistent max-width="500px">
					<v-card>
						<v-card-title>
							<span class="headline">{{ dialogTitle }}</span>
						</v-card-title>
						<v-card-text>
							<v-container grid-list-md>
								<v-layout wrap>
									<v-flex xs12>
										<v-text-field
											label="번호"
											v-model="contactInfo.contactId"
											required
										>
										</v-text-field>
									</v-flex>
									<!-- 이름 -->
									<v-flex xs12>
										<v-text-field
											label="이름"
											v-model="contactInfo.name"
											required
										>
										</v-text-field>
									</v-flex>
									<!-- 이메일 -->
									<v-flex xs12>
										<v-text-field
											label="이메일"
											v-model="contactInfo.email"
											required
										>
										</v-text-field>
									</v-flex>
									<!-- 성별 -->
									<v-flex xs12>
										<v-text-field
											label="성별"
											v-model="contactInfo.gender"
											required
										>
										</v-text-field>
									</v-flex>
									<!-- 전화 -->
									<v-flex xs12>
										<v-text-field
											label="전화"
											v-model="contactInfo.phone"
											required
										>
										</v-text-field>
									</v-flex>
									<!-- 등록일 -->
									<v-flex xs12>
										<v-text-field
											label="전화"
											v-model="contactInfo.register_date"
											required
										>
										</v-text-field>
									</v-flex>
								</v-layout>
							</v-container>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="btnClick($event)"
								>취소</v-btn
							>
							<v-btn color="blue darken-1" text @click="btnClick($event)"
								>확인</v-btn
							>
						</v-card-actions>
					</v-card>
					<!-- end v-card -->
				</v-dialog>
				<!-- end v-dialog -->
			</template>
			<!-- 어디..? -->
			<template v-slot:item.action="{ item }">
				<v-btn color="primary" class="mr-2" v-on:click.native="addContact()"
					>추가</v-btn
				>
				<v-btn
					color="primary"
					class="mr-2"
					v-on:click.native="updateContact(item)"
					>수정</v-btn
				>
				<v-btn
					color="primary"
					class="mr-2"
					v-on:click.native="deleteContact(item)"
					>삭제</v-btn
				>
			</template>
		</v-data-table>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			urlinfo: 'http://localhost:8000/contacts',
			contactInfo: {
				_id: null,
				contactId: null,
				name: null,
				email: null,
				gender: null,
				phone: null,
				register_date: null,
			},
			dialog: false,
			dialogTitle: null,
			headers: [
				{ text: '번호', align: 'right', value: 'contactId' },
				{ text: '이름', align: 'center', value: 'name' },
				{ text: '이메일', align: 'right', value: 'email' },
				{ text: '성별', align: 'center', value: 'gender' },
				{ text: '전화', align: 'center', value: 'phone' },
				{ text: '등록일', align: 'right', value: 'register_date' },
				{ text: '작업', align: 'center', value: 'actiono' },
			],
			items: [],
		};
	},
	created() {
		axios
			.get(this.urlinfo)
			.then(res => {
				console.log(res.data);
				this.items = res.data;
			})
			.catch(err => {
				console.error('에러발생!', err);
				alert(err);
			});
	},
	methods: {
		addContact() {
			this.dialog = true;
			this.dialogTitle = '추가';
			this.contactInfo.register_date = Date.now();
		},
	},
};
</script>

<style scoped>
div {
	margin: 0 5px 0 5px;
}
</style>
