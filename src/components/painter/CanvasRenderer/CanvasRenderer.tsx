import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Text as SvgText, Image } from 'react-native-svg';
import { CanvasElement } from '@/src/types/CanvasElement';

export const CanvasRenderer = ({ elements }: { elements: CanvasElement[] }) => {
    return (
        <View style={{flex: 1}}>
            <Svg style={StyleSheet.absoluteFill}>
                {elements.map(element => {
                    switch (element.type) {
                        case 'path':
                            return (
                                <Path
                                    key={element.id}
                                    d={element.path!.d}
                                    stroke={element.path!.color}
                                    strokeWidth={element.path!.width}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            );
                        case 'text':
                            return (
                                <SvgText
                                    key={element.id}
                                    x={element.position.x}
                                    y={element.position.y}
                                    fill={element.text!.color}
                                    fontSize={element.text!.fontSize}
                                    fontFamily={element.text!.fontFamily}
                                >
                                    {element.text!.content}
                                </SvgText>
                            );
                        case 'image':
                            return (
                                <Image
                                    key={element.id}
                                    x={element.position.x}
                                    y={element.position.y}
                                    width={element.image!.width}
                                    height={element.image!.height}
                                    href={{ uri: element.image!.uri }}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </Svg>
        </View>
    );
};