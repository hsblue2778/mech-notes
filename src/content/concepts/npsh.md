---
title: "NPSH"
summary: "흡입측 캐비테이션 판정 지표. NPSHa ≥ NPSHr + (0.5~1.0)m 를 만족해야 한다. 고온수일수록 포화증기압이 커져 NPSHa가 급감한다."
category: "펌프"
tags: ["NPSH", "캐비테이션", "흡입", "포화증기압"]
relatedTools: []
relatedConcepts: ["total-dynamic-head", "pump-selection"]
updated: 2026-06-11
---

## NPSHa (시스템이 펌프에 줄 수 있는 값)

$$
\text{NPSHa} = \frac{P_\text{atm} - P_\text{vap}}{\rho g} \pm H_s - h_{f,\text{suction}}
$$

- $H_s$: 흡입 정수두 (압입 +, 흡상 −)
- $P_\text{vap}$: 운전 온도에서의 포화증기압 → **고온수일수록 NPSHa 급감**

## 판정 기준

$$
\text{NPSHa} \ge \text{NPSHr} + (0.5 \sim 1.0)\ \text{m}
$$

- NPSHr은 펌프 카탈로그 곡선에서 운전 유량 기준으로 읽는다.
- 부족 시 대책: 흡입관 굵게, 펌프 위치 낮게, 흡입측 부속 최소화, 자흡식/입형 펌프 검토.
