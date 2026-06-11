---
title: "기계설비 실무 단위 정리"
summary: "압력·유량·열량·동력의 현장 단위와 환산. 핵심은 1 kgf/cm² ≈ 0.1 MPa ≈ 1 bar ≈ 10 mAq. HP↔RT 단순 환산은 주의."
category: "유체역학 기초"
tags: ["단위", "압력", "유량", "동력", "냉동톤"]
relatedTools: []
relatedConcepts: ["pressure-and-head", "fluid-properties"]
updated: 2026-06-11
---

## 압력

- **Pa**: SI 기본 단위지만 너무 작아 단독 사용은 드묾
- **kPa, MPa**: 계산·문서에서 주로 사용
- **kgf/cm²**: 현장에서 가장 많이 쓰는 단위
- **bar**: 외국 장비·계측기
- **mmAq**: 덕트·저압 공기 계통
- **mmHg**: 진공·의료기기

핵심 환산:

$$
1 \ \text{kgf/cm}^2 \approx 0.1 \ \text{MPa} \approx 1 \ \text{bar} \approx 10 \ \text{mAq}
$$

## 유량

- **m³/h**: 배관·펌프 유량 / **L/min(LPM)**: 소규모·냉각수
- **CMH** (= m³/h): 공조 덕트 / **CMM** (= m³/min): 대형 팬·송풍기

## 열량·동력

- 1 RT(법정 냉동톤, 한국·일본) = 3,320 kcal/h ≈ 3.86 kW (USRT는 3,024 kcal/h)
- 1 HP ≈ 0.75 kW (746 W)

> ⚠️ **주의 — HP↔RT 환산**
> "1HP ≈ 2RT" 같은 식의 단순 환산은 틀린 일반화다. 업계 통용 냉동마력은 1HP ≈ 2,500 kcal/h ≈ 0.75~0.83 RT 수준이며, 장비 종류·효율에 따라 크게 달라진다. 카탈로그의 HP·RT 병기는 호칭일 수 있으므로 반드시 사양서 원본 기준으로 확인할 것.
