import { Select, Space, Typography } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{
          width: '100%'
        }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder="Select Coin"
        options={crypto.map((coin) => ({
          lable: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.lable}
            />{" "}
            {option.data.lable}
          </Space>
        )}
      />
    );
  }
  return <form>
    <Typography.Title level={2} style={{margin: 0}}>
      {coin.name}
    </Typography.Title>
  </form>;
}
