#include "HybridMathSpec.hpp"

namespace margelo::nitro::exploringnitromodules {
  class HybridMath: public HybridMathSpec {
  public:
    HybridMath(): HybridObject(TAG) {}
    double add(double a, double b) override;
  };
}