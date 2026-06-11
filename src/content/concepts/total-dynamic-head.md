---
title: "개회로 vs 폐회로와 전양정(TDH)"
summary: "폐회로는 정수두가 0으로 상쇄되고, 개회로는 정수두를 반드시 포함한다. 이 구분을 틀리면 양정 계산이 통째로 틀린다."
category: "펌프"
tags: ["전양정", "TDH", "개회로", "폐회로", "정수두"]
relatedTools: []
relatedConcepts: ["minor-losses", "npsh", "pump-selection"]
updated: 2026-06-11
---

## 개요

이 구분이 헷갈리면 양정 계산이 통째로 틀린다.

## 폐회로 (Closed Loop)

- 유체가 밀폐 회로를 순환 (예: 칠러 → 부하 → 칠러)
- 정수두(Static Head)가 **상쇄되어 0**
- 팽창탱크로 압력 유지

$$
H_\text{total} = h_{f,\text{total}} + h_{L,\text{total}} + \Delta P_\text{equip}
$$

## 개회로 (Open Loop)

- 한쪽이 대기에 개방 (예: 수조 → 사용처, 냉각탑)
- 정수두($Z_2 - Z_1$) **반드시 포함**, 압력차 항도 포함

$$
H_\text{total} = (Z_2 - Z_1) + \frac{P_2 - P_1}{\rho g} + \frac{v_2^2 - v_1^2}{2g} + h_{f,\text{total}} + h_{L,\text{total}} + \Delta P_\text{equip}
$$

- 흡입측 NPSH 별도 계산 필수

## 안전 마진

산출 후 **설계 양정 = 계산 양정 × 1.1~1.15**.

분야별 여유율 프리셋(참고): HVAC 양정 10%·동력 1.15배, 급수·급탕 15%, 공정 20%·동력 1.20배.
