#include "HybridLogbookSpec.hpp"

namespace margelo::nitro::logbook {
  class HybridLogbook: public HybridLogbookSpec {
  public:
    HybridLogbook(): HybridObject(TAG) {}
    double add(double a, double b) override;
  };
}