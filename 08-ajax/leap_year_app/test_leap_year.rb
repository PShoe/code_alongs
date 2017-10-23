require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new()

require_relative 'leap_year'




class LeapYearTest < MiniTest::Test
  def test_2016_is_a_leap_year
    # expected, actual
    assert_equal true, LeapYear.check(2016)
  end
  def test_2017_is_not_a_leap_year
    assert_equal false, LeapYear.check(2017)
  end
  def test_2000_is_not_a_leap_year
    assert_equal true, LeapYear.check(2000)
  end
  def test_1900_is_not_a_leap_year
    assert_equal false, LeapYear.check(1900)
  end
end
