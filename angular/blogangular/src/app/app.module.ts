import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { AboutComponent } from './pages/about/about.component';
import { AngularComponent } from './pages/angular/angular.component';
import { BackendComponent } from './pages/backend/backend.component';
import { BashComponent } from './pages/bash/bash.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';
import { FontendMlComponent } from './pages/fontend-ml/fontend-ml.component';
import { GitComponent } from './pages/git/git.component';
import { HomeComponent } from './pages/home/home.component';
import { JavaComponent } from './pages/java/java.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { LoginComponent } from './pages/login/login.component';
import { PythonComponent } from './pages/python/python.component';
import { ReactComponent } from './pages/react/react.component';
import { RustComponent } from './pages/rust/rust.component';
import { SearchComponent } from './pages/search/search.component';
import { VueComponent } from './pages/vue/vue.component';
import { AlgorithmSolutionComponent } from './articles/algorithm/algorithm-solution/algorithm-solution.component';
import { BinarySearchTreeComponent } from './articles/algorithm/binary-search-tree/binary-search-tree.component';
import { CodewarComponent } from './articles/algorithm/codewar/codewar.component';
import { JsThisComponent } from './articles/algorithm/js-this/js-this.component';
import { LinkedListComponent } from './articles/algorithm/linked-list/linked-list.component';
import { PrecompileComponent } from './articles/algorithm/precompile/precompile.component';
import { AngularJSTranscludeComponent } from './articles/angular/angular-js-transclude/angular-js-transclude.component';
import { AngularLearnCreatingCustomDirectivesComponent } from './articles/angular/angular-learn-creating-custom-directives/angular-learn-creating-custom-directives.component';
import { AngularLearnWatchComponent } from './articles/angular/angular-learn-watch/angular-learn-watch.component';
import { ControllerCommunicationComponent } from './articles/angular/controller-communication/controller-communication.component';
import { DirectiveCommunicationComponent } from './articles/angular/directive-communication/directive-communication.component';
import { DirectiveNotesComponent } from './articles/angular/directive-notes/directive-notes.component';
import { PostParamsComponent } from './articles/angular/post-params/post-params.component';
import { ReadJsonAngularComponent } from './articles/angular/read-json-angular/read-json-angular.component';
import { SameRouteReloadAngularComponent } from './articles/angular/same-route-reload-angular/same-route-reload-angular.component';
import { NodeNysqlComponent } from './articles/backend/node-nysql/node-nysql.component';
import { BashprofileComponent } from './articles/bash/bashprofile/bashprofile.component';
import { CssNoteComponent } from './articles/css/css-note/css-note.component';
import { UseCssMediaComponent } from './articles/css/use-css-media/use-css-media.component';
import { GitCommitComponent } from './articles/git/git-commit/git-commit.component';
import { GitGuideComponent } from './articles/git/git-guide/git-guide.component';
import { BoolIntComponent } from './articles/java/bool-int/bool-int.component';
import { CodeWarKataComponent } from './articles/java/code-war-kata/code-war-kata.component';
import { RunJarComponent } from './articles/java/run-jar/run-jar.component';
import { CodeWarComponent } from './articles/js/code-war/code-war.component';
import { GettingStartedWithAjaxComponent } from './articles/js/getting-started-with-ajax/getting-started-with-ajax.component';
import { GooleZxComponent } from './articles/js/goole-zx/goole-zx.component';
import { JsImplmentMusicPlayerComponent } from './articles/js/js-implment-music-player/js-implment-music-player.component';
import { JsTutorialMapComponent } from './articles/js/js-tutorial-map/js-tutorial-map.component';
import { JsTutorialMathComponent } from './articles/js/js-tutorial-math/js-tutorial-math.component';
import { JsTutorialObjectComponent } from './articles/js/js-tutorial-object/js-tutorial-object.component';
import { JsTutorialSetComponent } from './articles/js/js-tutorial-set/js-tutorial-set.component';
import { JsTutorialComponent } from './articles/js/js-tutorial/js-tutorial.component';
import { SingleThreadAndAsynchronousComponent } from './articles/js/single-thread-and-asynchronous/single-thread-and-asynchronous.component';
import { TfJsComponent } from './articles/ml/tf-js/tf-js.component';
import { ConvertPesnComponent } from './articles/python/convert-pesn/convert-pesn.component';
import { FindRemoveDirComponent } from './articles/python/find-remove-dir/find-remove-dir.component';
import { WechatTimimgMessageComponent } from './articles/python/wechat-timimg-message/wechat-timimg-message.component';
import { ReactLifeCycleComponent } from './articles/react/react-life-cycle/react-life-cycle.component';
import { ReactRouterComponent } from './articles/react/react-router/react-router.component';
import { ReactThisComponent } from './articles/react/react-this/react-this.component';
import { AddTwoNumbersComponent } from './articles/rust/add-two-numbers/add-two-numbers.component';
import { CodewarKataComponent } from './articles/rust/codewar-kata/codewar-kata.component';
import { CompressRustBinarySizeComponent } from './articles/rust/compress-rust-binary-size/compress-rust-binary-size.component';
import { ContainerWithMostWaterComponent } from './articles/rust/container-with-most-water/container-with-most-water.component';
import { EncryptionDataComponent } from './articles/rust/encryption-data/encryption-data.component';
import { FindTwoDiagonalsOfParallelogramComponent } from './articles/rust/find-two-diagonals-of-parallelogram/find-two-diagonals-of-parallelogram.component';
import { ImplementAesEncryptionComponent } from './articles/rust/implement-aes-encryption/implement-aes-encryption.component';
import { IntegerToRomanComponent } from './articles/rust/integer-to-roman/integer-to-roman.component';
import { JewelsAndStonesComponent } from './articles/rust/jewels-and-stones/jewels-and-stones.component';
import { MergeTwoBinaryTreesComponent } from './articles/rust/merge-two-binary-trees/merge-two-binary-trees.component';
import { PalindromeNumberComponent } from './articles/rust/palindrome-number/palindrome-number.component';
import { ParseTypesComponent } from './articles/rust/parse-types/parse-types.component';
import { PermutationsComponent } from './articles/rust/permutations/permutations.component';
import { ReverseIntegerComponent } from './articles/rust/reverse-integer/reverse-integer.component';
import { RobotReturnToOriginComponent } from './articles/rust/robot-return-to-origin/robot-return-to-origin.component';
import { RustGrammerComponent } from './articles/rust/rust-grammer/rust-grammer.component';
import { RustGuiDvelopComponent } from './articles/rust/rust-gui-dvelop/rust-gui-dvelop.component';
import { RustImplementTreeComponent } from './articles/rust/rust-implement-tree/rust-implement-tree.component';
import { RustImplmentMatrixComponent } from './articles/rust/rust-implment-matrix/rust-implment-matrix.component';
import { SameTreeComponent } from './articles/rust/same-tree/same-tree.component';
import { StringToIntegerComponent } from './articles/rust/string-to-integer/string-to-integer.component';
import { SudokuSolverComponent } from './articles/rust/sudoku-solver/sudoku-solver.component';
import { ToLowerCaseComponent } from './articles/rust/to-lower-case/to-lower-case.component';
import { TwoSumComponent } from './articles/rust/two-sum/two-sum.component';
import { UniqueMorseCodeWordsComponent } from './articles/rust/unique-morse-code-words/unique-morse-code-words.component';
import { UniqueVecComponent } from './articles/rust/unique-vec/unique-vec.component';
import { ValidSudokuComponent } from './articles/rust/valid-sudoku/valid-sudoku.component';
import { ZigzagConversionComponent } from './articles/rust/zigzag-conversion/zigzag-conversion.component';
import { VueAjaxComponent } from './articles/vue/vue-ajax/vue-ajax.component';
import { VueAnimationComponent } from './articles/vue/vue-animation/vue-animation.component';
import { VuePostPropsComponent } from './articles/vue/vue-post-props/vue-post-props.component';
import { SelfDividingNumbersComponent } from './articles/rust/self-dividing-numbers/self-dividing-numbers.component';
import { NimGameComponent } from './articles/rust/nim-game/nim-game.component';
import { MaximumDepthOfBinaryTreeComponent } from './articles/rust/maximum-depth-of-binary-tree/maximum-depth-of-binary-tree.component';
import { HammingDistanceComponent } from './articles/rust/hamming-distance/hamming-distance.component';
import { FlippingAnImageComponent } from './articles/rust/flipping-an-image/flipping-an-image.component';
import { DiStringMatchComponent } from './articles/rust/di-string-match/di-string-match.component';
import { UniqueEmailAddressesComponent } from './articles/rust/unique-email-addresses/unique-email-addresses.component';
import { WhereMyAnagramsAtComponent } from './articles/rust/where-my-anagrams-at/where-my-anagrams-at.component';
import { PaseStringAndDecimalConversionComponent } from './articles/rust/pase-string-and-decimal-conversion/pase-string-and-decimal-conversion.component';
import { ImplementTrieDataStructureComponent } from './articles/rust/implement-trie-data-structure/implement-trie-data-structure.component';
import { MyCommandListComponent } from './articles/bash/my-command-list/my-command-list.component';
import { OptimizeRustCompilationBinarySizeComponent } from './articles/rust/optimize-rust-compilation-binary-size/optimize-rust-compilation-binary-size.component';
import { ClonalSelectionAlgorithmComponent } from './articles/python/clonal-selection-algorithm/clonal-selection-algorithm.component';
import { RustImplmentFindAndRemoveCliComponent } from './articles/rust/rust-implment-find-and-remove-cli/rust-implment-find-and-remove-cli.component';
import { ListDirComponent } from './articles/rust/list-dir/list-dir.component';
import { FastWayToImplmentObjectTraitComponent } from './articles/rust/fast-way-to-implment-object-trait/fast-way-to-implment-object-trait.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RustComponent,
    BackendComponent,
    FontendMlComponent,
    JavascriptComponent,
    PythonComponent,
    JavaComponent,
    VueComponent,
    ReactComponent,
    CardComponent,
    RustGuiDvelopComponent,
    MarkdownComponent,
    RunJarComponent,
    BoolIntComponent,
    AngularComponent,
    PostParamsComponent,
    ReadJsonAngularComponent,
    SameRouteReloadAngularComponent,
    ParseTypesComponent,
    GitCommitComponent,
    GitComponent,
    DataStructureComponent,
    SingleThreadAndAsynchronousComponent,
    GettingStartedWithAjaxComponent,
    SearchComponent,
    GitGuideComponent,
    GooleZxComponent,
    AlgorithmSolutionComponent,
    VueAnimationComponent,
    VuePostPropsComponent,
    VueAjaxComponent,
    ReactLifeCycleComponent,
    ReactRouterComponent,
    ReactThisComponent,
    NodeNysqlComponent,
    CssNoteComponent,
    FooterComponent,
    AngularLearnWatchComponent,
    AngularLearnCreatingCustomDirectivesComponent,
    DirectiveNotesComponent,
    ControllerCommunicationComponent,
    AngularJSTranscludeComponent,
    DirectiveCommunicationComponent,
    JsTutorialComponent,
    JsTutorialObjectComponent,
    JsTutorialMathComponent,
    JsTutorialSetComponent,
    JsTutorialMapComponent,
    ConvertPesnComponent,
    FindRemoveDirComponent,
    WechatTimimgMessageComponent,
    CodeWarComponent,
    LinkedListComponent,
    BinarySearchTreeComponent,
    PrecompileComponent,
    JsThisComponent,
    CodewarComponent,
    BashComponent,
    BashprofileComponent,
    CodeWarKataComponent,
    LoginComponent,
    RustGrammerComponent,
    CodewarKataComponent,
    RustImplmentMatrixComponent,
    JsImplmentMusicPlayerComponent,
    UseCssMediaComponent,
    TfJsComponent,
    UniqueVecComponent,
    EncryptionDataComponent,
    CompressRustBinarySizeComponent,
    RustImplementTreeComponent,
    ImplementAesEncryptionComponent,
    FindTwoDiagonalsOfParallelogramComponent,
    TwoSumComponent,
    AddTwoNumbersComponent,
    ZigzagConversionComponent,
    ReverseIntegerComponent,
    StringToIntegerComponent,
    PalindromeNumberComponent,
    IntegerToRomanComponent,
    ContainerWithMostWaterComponent,
    ValidSudokuComponent,
    SudokuSolverComponent,
    PermutationsComponent,
    SameTreeComponent,
    ToLowerCaseComponent,
    MergeTwoBinaryTreesComponent,
    RobotReturnToOriginComponent,
    JewelsAndStonesComponent,
    UniqueMorseCodeWordsComponent,
    SelfDividingNumbersComponent,
    NimGameComponent,
    MaximumDepthOfBinaryTreeComponent,
    HammingDistanceComponent,
    FlippingAnImageComponent,
    DiStringMatchComponent,
    UniqueEmailAddressesComponent,
    WhereMyAnagramsAtComponent,
    PaseStringAndDecimalConversionComponent,
    ImplementTrieDataStructureComponent,
    MyCommandListComponent,
    OptimizeRustCompilationBinarySizeComponent,
    ClonalSelectionAlgorithmComponent,
    RustImplmentFindAndRemoveCliComponent,
    ListDirComponent,
    FastWayToImplmentObjectTraitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: true,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
