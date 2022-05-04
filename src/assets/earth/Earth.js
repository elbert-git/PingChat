/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import earthModel from './Earth.glb';
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(earthModel)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.BakingSphere.geometry} material={materials.Material} scale={0.86} />
    </group>
  )
}

useGLTF.preload('/Earth.glb')
