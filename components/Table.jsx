import styles from "@styles/Table.module.css";
import Image from "next/image";

const Table = () => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th></th>
					<th>
						<Image
							src="https://io.net/_next/static/media/azure-t40.b2996def.svg"
							alt=""
							width={120}
							height={120}
						/>
					</th>
					<th>
						<Image
							src="https://io.net/_next/static/media/rtx-3090.635010c6.svg"
							alt=""
							width={120}
							height={120}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>CUDA Cores</td>
					<td className="text-[#ffffffad]">2,560</td>
					<td className="text-[#ffffffad]">10,496</td>
				</tr>
				<tr>
					<td>TeraFLOPS</td>
					<td className="text-[#ffffffad]">8.14</td>
					<td className="text-[#ffffffad]">35.58</td>
				</tr>
				<tr>
					<td>Memory</td>
					<td className="text-[#ffffffad]">15GB</td>
					<td className="text-[#ffffffad]">24GB</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
