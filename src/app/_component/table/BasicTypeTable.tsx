'use client';

import HeaderAction from './HeaderAction';
import style from './BasicTypeTable.module.css';

type headerType = {
	accessorKey: string;
	header: string;
};

// export type User = {
//   id: number | undefined;
//   email: string | undefined;
//   fullname: string | undefined;
//   role: string | undefined;
// };

// const columns: Array<headerType> = [
//   {
//     accessorKey: "id",
//     header: "번호",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "fullname",
//     header: "이름",
//   },
//   {
//     accessorKey: "role",
//     header: "권한",
//   },
// ];

// const userData: Array<User> = [
//   {
//     id: 1,
//     email: "aaa@hanmail.net",
//     fullname: "nam yeun hwa",
//     role: "a-manager",
//   },
//   {
//     id: 2,
//     email: "aaa@hanmail.net",
//     fullname: "John Doe",
//     role: "a-manager",
//   },
//   {
//     id: 3,
//     email: "aaa@hanmail.net",
//     fullname: "Jane Doe",
//     role: "a-manager",
//   },
//   {
//     id: 4,
//     email: "ccc.smith@example.com",
//     fullname: "Michael Smith",
//     role: "a-manager",
//   },
//   {
//     id: 5,
//     email: "abcde.jones@example.com",
//     fullname: "Emily Jones",
//     role: "e-employee",
//   },
//   {
//     id: 6,
//     email: "chris.lee@example.com",
//     fullname: "Chris Lee",
//     role: "f-supervisor",
//   },
//   {
//     id: 7,
//     email: "sarah.williams@example.com",
//     fullname: "Sarah Williams",
//     role: "g-employee",
//   },
//   {
//     id: 8,
//     email: "david.brown@example.com",
//     fullname: "David Brown",
//     role: "h-manager",
//   },
//   {
//     id: 9,
//     email: "lisa.miller@example.com",
//     fullname: "Lisa Miller",
//     role: "i-supervisor",
//   },
//   {
//     id: 10,
//     email: "kevin.moore@example.com",
//     fullname: "Kevin Moore",
//     role: "j-employee",
//   },
// ];

export type TableProps<T> = {
	header: Array<headerType>;
	contents: Array<T>;
	onSortHandler?: (accessorKey: string) => void;
	filterInputToggle?: boolean;
	onFilterHandler?: (key: keyof T, value: string) => void;
};

export default function BasicTypeTable<T extends { [key: string]: any }>({
	header,
	contents,
	onSortHandler,
	filterInputToggle,
	onFilterHandler,
}: TableProps<T>) {
	return (
		<table className={style.table}>
			<thead>
				<tr className={style.tr}>
					{header.map(v => {
						return (
							<th className={style.th} key={v.accessorKey}>
								{
									<HeaderAction
										valueKey={v.accessorKey}
										text={v.header}
										// onClick={onSortHandler}
										// filterInputToggle={filterInputToggle}
									>
										{/* <FilterBox
											onFilterHandler={onFilterHandler}
											filterId={v.accessorKey}
										/> */}
									</HeaderAction>
								}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{contents.map((v, key) => {
					return (
						<tr key={key} className={style.td}>
							{Object.entries(v).map(([key, value]) => (
								<td key={key}>{value}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

// export interface IGrideCell<T> {
//   position: IGridPosition;
//   data: Array<T>;
//   change: (position: IGridPosition, value?: T) => void;
// }
