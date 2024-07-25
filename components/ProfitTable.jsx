import styles from "@styles/Table.module.css";
import Image from "next/image";
import IdNet from "@assets/idnet.png";

const ProfitTable = () => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th></th>
					<th>
						<Image src={IdNet} alt="" width={130} height={130} />
					</th>
					<th>
						<Image
							src="https://io.net/_next/static/media/nhl-ethhash-marketplace.6bd4b71c.svg"
							alt=""
							width={120}
							height={120}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Chip</td>
					<td className="text-[#ffffffad]">RTX 4090 </td>
					<td className="text-[#ffffffad]">RTX 4090</td>
				</tr>
				<tr>
					<td>Hashrate</td>
					<td className="text-[#ffffffad]">X</td>
					<td className="text-[#ffffffad]">276.3 MH/s</td>
				</tr>
				<tr>
					<td>TeraFLOPS</td>
					<td className="text-[#ffffffad]">82.58</td>
					<td className="text-[#ffffffad]">82.58</td>
				</tr>
				<tr>
					<td>Memory</td>
					<td className="text-[#ffffffad]">24GB</td>
					<td className="text-[#ffffffad]">24GB</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ProfitTable;
