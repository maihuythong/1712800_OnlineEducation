import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { images } from "../image";
import SvgUri from "expo-svg-uri";

const CustomRatingBar = (props) => {
  let { star, isRating } = props;
  star = star > 5 ? 5 : star;
  const starRound = ~~star;
  const left = star - starRound;
  let stars = [];
  let i = 0;
  for (; i < starRound; i++) {
    stars[i] = i + 1;
  }

  ++i;
  if (left !== 0) stars[i++] = 0;
  if (star + Math.round(left) < 5) {
    for (let j = i; j <= 5; j++) {
      stars[j] = -1;
    }
  }

  return (
    <View style={styles.container}>
      {stars.map((v, k) => {
        if (v === 0) {
          return (
            <View>
              {isRating ? (
                <TouchableOpacity>
                  <SvgUri
                    key={k}
                    width="16"
                    height="16"
                    source={images.starhalf.uri}
                  />
                </TouchableOpacity>
              ) : (
                <SvgUri
                  key={k}
                  width="16"
                  height="16"
                  source={images.starhalf.uri}
                />
              )}
            </View>
          );
        } else {
          if (v === -1) {
            return (
              <View>
                {isRating ? (
                  <TouchableOpacity>
                    <SvgUri
                      key={k}
                      width="16"
                      height="16"
                      source={images.starcorner.uri}
                    />
                  </TouchableOpacity>
                ) : (
                  <SvgUri
                    key={k}
                    width="16"
                    height="16"
                    source={images.starcorner.uri}
                  />
                )}
              </View>
            );
          } else {
            return (
              <View>
                {isRating ? (
                  <TouchableOpacity>
                    <SvgUri
                      key={k}
                      width="16"
                      height="16"
                      source={images.starfill.uri}
                    />
                  </TouchableOpacity>
                ) : (
                  <SvgUri
                    key={k}
                    width="16"
                    height="16"
                    source={images.starfill.uri}
                  />
                )}
              </View>
            );
          }
        }
      })}
    </View>
  );
};

export default CustomRatingBar;
