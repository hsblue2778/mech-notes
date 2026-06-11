---
title: "관마찰손실"
summary: "배관 내 유체가 마찰로 잃는 압력. Darcy-Weisbach 식으로 계산하며, 마찰계수는 Reynolds 수와 상대조도에 따라 달라진다."
category: "배관설계"
tags: ["마찰손실", "Darcy-Weisbach", "Reynolds수", "압력손실"]
relatedTools: ["/tools/friction-loss"]
relatedConcepts: []
updated: 2026-06-11
---

## 개요

유체가 배관을 흐를 때 관 내벽과의 마찰 때문에 압력이 손실된다.
펌프 양정 계산과 배관 구경 선정의 출발점이 되는 개념이다.

## Darcy-Weisbach 식

$$
\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho v^2}{2}
$$

| 기호 | 의미 | 단위 |
| --- | --- | --- |
| $\Delta P$ | 압력손실 | Pa |
| $f$ | 마찰계수 (무차원) | – |
| $L$ | 배관 길이 | m |
| $D$ | 관 내경 | m |
| $\rho$ | 유체 밀도 | kg/m³ |
| $v$ | 평균 유속 | m/s |

수두(head) 기준으로 쓰면 $h_f = f \cdot \dfrac{L}{D} \cdot \dfrac{v^2}{2g}$ 가 된다.

## Reynolds 수와 유동 상태

마찰계수 $f$를 구하려면 먼저 유동이 층류인지 난류인지 판별해야 한다.

$$
Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}
$$

여기서 $\mu$는 점성계수(Pa·s), $\nu$는 동점성계수(m²/s)이다.

| 구간 | 유동 상태 | 마찰계수 |
| --- | --- | --- |
| $Re < 2300$ | 층류 | $f = 64/Re$ |
| $2300 \le Re \le 4000$ | 천이역 | 불안정 — 보통 난류로 가정 |
| $Re > 4000$ | 난류 | Colebrook 식 또는 Moody 선도 |

난류역에서는 Colebrook-White 식을 반복 계산으로 푼다:

$$
\frac{1}{\sqrt{f}} = -2 \log_{10}\left( \frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}} \right)
$$

## 실무 메모

- 일반 급수·냉온수 배관은 대부분 난류역이라고 보면 된다.
- 상대조도 $\varepsilon/D$는 배관 재질(강관, 동관, PVC)에 따라 달라진다.
- 빠른 검토에는 [관마찰손실 계산기](/tools/friction-loss)를 쓴다.
