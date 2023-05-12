import { useState } from "react";

import * as S from "./style";

import { ScrollView } from "react-native";
import { Image, Input } from "@rneui/themed";

import { ActivityIndicator } from "react-native";

const CustomerScreen = () => {
  const [input, setInput] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#59c1cc" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={{ width: "100%", height: 256 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <S.InputWrapper>
        <Input
          placeholder="Search by Customer"
          value={input}
          onChangeText={setInput}
        />
      </S.InputWrapper>
    </ScrollView>
  );
};

export default CustomerScreen;
